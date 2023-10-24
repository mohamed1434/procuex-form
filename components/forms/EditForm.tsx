import { zodResolver } from "@hookform/resolvers/zod";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../form-fields/InputField";
import SelectField from "../form-fields/SelectField";
import RadioField from "../form-fields/RadioField";
import { FormData, schema } from "@/validations/edit-form-validation";
import TextAreaField from "../form-fields/TextAreaField";
import CopyTag from "../CopyTag";
import DateField from "../form-fields/DateField";
import Spinner from "../Spinner";

const countryOptions = ["Kuwait", "Lebanon", "India", "Russia", "Bahrain"];

const categoryOptions = ["Kuwait", "Lebanon", "India", "Russia", "Bahrain"];

export default function EditForm() {
  const [isEditMode, setIsEditMode] = useState(false);
  const [showPublicLink, setShowPublicLink] = useState(false);
  const [loading, setLoading] = useState(true);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, defaultValues },
    getValues,
    setValue,
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      requestName: "Prefilled Request Name",
      country: "Kuwait",
      openingDate: new Date("2023-10-22").toISOString().split("T")[0],
      submissionClosingDate: new Date("2023-10-30").toISOString().split("T")[0],
      reviewDate: new Date("2023-10-30").toISOString().split("T")[0],
      selectionDate: new Date("2023-10-30").toISOString().split("T")[0],
      category: "Kuwait",
      subCategory: "Kuwait",
      radioOptions: "Third Level",
      description: "Android Application for booking hotels",
      summary: "Android Application for booking hotels",
      isPublicLinkProtected: true,
      publicLinkPassword: "abc123",
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const onSubmit = (data: FormData) => {
    console.log(data);

    setIsEditMode(false);
  };

  const openingDate = getValues("openingDate");
  const reviewDate = getValues("reviewDate");
  const isPublicLinkProtected = getValues("isPublicLinkProtected");

  const handleClick = () => {
    setValue("isPublicLinkProtected", !isPublicLinkProtected, {
      shouldValidate: true,
    });
    setValue("publicLinkPassword", "", { shouldValidate: true });
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <form
        className="flex flex-col items-center justify-center h-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full flex flex-col items-center justify-center gap-4 p-6">
          <div className="w-full flex flex-col items-center justify-center gap-4 md:flex-row">
            <InputField
              label="Request Name"
              type="text"
              name="requestName"
              register={register}
              error={errors.requestName?.message}
              isEditMode={isEditMode}
            />
            <SelectField
              label="Country of Supply"
              name="country"
              register={register}
              error={errors.country?.message}
              items={countryOptions}
              isEditMode={isEditMode}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <DateField
              label="Opening Date"
              name="openingDate"
              register={register}
              isEditMode={isEditMode}
              error={errors.openingDate?.message}
              min={new Date()}
            />

            <DateField
              label="Submission Closing Date"
              name="submissionClosingDate"
              register={register}
              error={errors.submissionClosingDate?.message}
              min={openingDate}
              isEditMode={isEditMode}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <DateField
              label="Review Date"
              name="reviewDate"
              register={register}
              error={errors.reviewDate?.message}
              min={openingDate}
              isEditMode={isEditMode}
              defaultValue={reviewDate}
            />
            <DateField
              label="Selection Date"
              name="selectionDate"
              register={register}
              error={errors.selectionDate?.message}
              min={openingDate}
              isEditMode={isEditMode}
            />
          </div>

          <div className="w-full flex flex-col md:flex-row items-center justify-center gap-4">
            <SelectField
              label="Cateogry"
              name="category"
              register={register}
              error={errors.category?.message}
              items={categoryOptions}
              isEditMode={isEditMode}
            />
            <SelectField
              label="Sub Cateogry"
              name="subCategory"
              register={register}
              error={errors.subCategory?.message}
              items={categoryOptions}
              isEditMode={isEditMode}
            />
          </div>
          <div className="flex flex-col items-start md:items-center md:flex-row  justify-start gap-6 w-full">
            <RadioField
              name="radioOptions"
              label="Direct Supply"
              register={register}
              isEditMode={isEditMode}
              defaultValue={"Direct Supply"}
            />
            <RadioField
              name="radioOptions"
              label="Sub Contracting"
              register={register}
              isEditMode={isEditMode}
              defaultValue={"Sub Contracting"}
            />
            <RadioField
              name="radioOptions"
              label="Third Level"
              register={register}
              isEditMode={isEditMode}
              defaultValue={"Third Level"}
            />
          </div>
          <div>
            {errors.radioOptions && (
              <p className="text-red-600 text-sm">
                {errors.radioOptions.message}
              </p>
            )}
          </div>

          <div className="flex flex-col border-2 border-[#E2E5E8] w-full rounded-lg p-4 gap-2">
            <div className="flex items-center gap-2">
              <h1 className="text-[14px]">Enable Public Link</h1>
              <div className="inline-flex items-center">
                <div className="relative inline-block h-4 w-8 cursor-pointer rounded-full">
                  <input
                    onClick={() => setShowPublicLink(!showPublicLink)}
                    disabled={!isEditMode}
                    id="switch-component"
                    type="checkbox"
                    className="peer absolute h-4 w-8 cursor-pointer appearance-none rounded-full bg-gray-200 transition-colors duration-300 checked:bg-blue-500 dark:checked:bg-pink-500 peer-checked:border-blue-500 dark:peer-checked:border-pink-500 peer-checked:before:bg-blue-500 dark:peer-checked:before:bg-pink-500"
                  />
                  <label
                    htmlFor="switch-component"
                    className="before:content-[''] absolute top-2/4 left-[4px] h-3 w-3 -translate-y-2/4 cursor-pointer rounded-full border border-gray-100 bg-white shadow-md transition-all duration-300 before:absolute before:top-2/4 before:left-2/4 before:block before:h-10 before:w-10 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-gray-500 before:opacity-0 before:transition-opacity hover:before:opacity-10 peer-checked:translate-x-full peer-checked:border-blue-500 dark:peer-checked:border-pink-500 peer-checked:before:bg-blue-500 dark:peer-checked:before:bg-pink-500"
                  />
                </div>
              </div>
            </div>

            {showPublicLink && (
              <>
                <div className="flex items-start justify-between gap-2 md:flex-row flex-col md:items-center">
                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      {...register("isPublicLinkProtected")}
                      disabled={!isEditMode}
                      onClick={handleClick}
                      checked={isPublicLinkProtected}
                    />
                    <h1 className="text-[14px]">
                      Is The Public Link Protected ?
                    </h1>
                  </div>
                  {isPublicLinkProtected && (
                    <div className="w-full md:w-[60%]">
                      <InputField
                        type="password"
                        name="publicLinkPassword"
                        label="Public Link Password"
                        register={register}
                        error={errors.publicLinkPassword?.message}
                        isEditMode={isEditMode}
                      />
                    </div>
                  )}
                </div>

                <div className="flex items-center gap-2 w-full">
                  <img
                    src="/assets/link-icon.svg"
                    className="h-4 w-4 object-cover"
                  />
                  <CopyTag
                    url={
                      "https://company.procuex.com/public/rfq/preview/6f434d72-6f4e-4333-bfe3-b499d650d0de"
                    }
                  />
                </div>
              </>
            )}
          </div>

          <TextAreaField
            label="Description"
            name="description"
            register={register}
            error={errors.description?.message}
            isEditMode={isEditMode}
          />
          <TextAreaField
            label="Summary"
            name="summary"
            register={register}
            error={errors.summary?.message}
            isEditMode={isEditMode}
          />
        </div>
        <div className="w-full flex items-center justify-end">
          {isEditMode && (
            <button
              disabled={isSubmitting}
              type="submit"
              className="py-2 px-10 bg-blue-700 dark:bg-pink-500 transition-colors duration-300 ease-in-out rounded-lg text-white"
            >
              Save and Proceed
            </button>
          )}
        </div>
      </form>
      {!isEditMode && (
        <div className="w-full flex justify-end items-center">
          <button
            className="py-2 px-10 bg-blue-700 dark:bg-pink-500 transition-colors duration-300 ease-in-out rounded-lg text-white"
            onClick={() => setIsEditMode(true)}
          >
            Edit
          </button>
        </div>
      )}
    </>
  );
}
