"use client";

import { JournalCard } from "@/components/shared/Card";
import { journalList } from "@/constant/JournalJson";
import Link from "next/link";
import React, { useState } from "react";

type Tabs = "all" | "collaborations" | "people" | "pottery" | "news";

const JournalScreen = () => {
  const [selectedTab, setSelectedTab] = useState<Tabs>("all");

  const tabs: Tabs[] = ["all", "collaborations", "people", "pottery", "news"];

  const filteredJournal = selectedTab !== "all" ? journalList.filter((journal) => journal.category.toLowerCase() === selectedTab) : journalList;

  return (
    <div>
      <div>
        <div role="tablist" className="tabs tabs-bordered">
          {tabs.map((tab) => (
            <React.Fragment key={tab}>
              <input type="radio" name="my_tabs_1" role="tab" className="tab" aria-label={tab} checked={selectedTab === tab} onChange={() => setSelectedTab(tab)} />
              {selectedTab === tab && (
                <div role="tabpanel" className="tab-content py-10 !grid !grid-cols-3 gap-x-4 gap-y-24">
                  {filteredJournal.map((journal) => (
                    <div key={journal.id} className="col-span-1">
                      <Link href={`/journal/${journal.id}`}>
                        <JournalCard key={journal.id} {...journal} />
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JournalScreen;
