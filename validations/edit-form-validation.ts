import * as z from "zod";

const today = new Date();
const yesterday = new Date();
yesterday.setDate(today.getDate() - 1);

export const schema = z
  .object({
    requestName: z
      .string()
      .nonempty({ message: "Request Name is required" })
      .refine(
        (value) => {
          if (!value) {
            return true; // No validation needed for empty fields
          }
          return /^[A-Za-z\s]+$/.test(value); // Contains only letters and spaces
        },
        {
          message: "Request Name should only contain letters and spaces",
        }
      ),
    country: z
      .string()
      .trim()
      .nonempty({ message: "Country of Supply is Required" }),
    openingDate: z.coerce
      .date()
      .min(yesterday, { message: "Date must be greater than yesterday's date" }),
    submissionClosingDate: z.coerce.date(),
    reviewDate: z.coerce.date(),
    selectionDate: z.coerce.date(),
    category: z.string().trim().nonempty({ message: "Category is Required" }),
    subCategory: z
      .string()
      .trim()
      .nonempty({ message: "Sub Category is Required" }),
    radioOptions: z.string(),
    description: z
      .string()
      .min(10, { message: "Description should be at least 10 characters." }),
    summary: z
      .string()
      .min(10, { message: "Summary should be at least 10 characters." }),
    isPublicLinkProtected: z.boolean(),
    publicLinkPassword: z
      .string()
  })
  .refine((data) => data.submissionClosingDate > data.openingDate, {
    message: "Submission Date should be greater than Opening Date",
    path: ["submissionClosingDate"],
  });

export type FormData = z.infer<typeof schema>;
