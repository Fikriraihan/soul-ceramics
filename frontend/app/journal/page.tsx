import React from "react";
import JournalScreen from "../Modules/JournalScreen";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Journal",
};

const Journal = () => {
  return <JournalScreen />;
};

export default Journal;
