"use client";
import { CreateProductForm } from "@/components/create-product-form";
import FileInput from "@/components/shared/FileInput";
import FormInput from "@/components/shared/FormInput";
import { createProduct } from "@/services/product/product-service";
import React from "react";

const CreateProductScreen = () => {
  return <CreateProductForm />;
};

export default CreateProductScreen;
