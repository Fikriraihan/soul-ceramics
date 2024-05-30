import { JournalCard } from "@/components/shared/Card";
import { journalList } from "@/constant/JournalJson";
import { JournalProps } from "@/types/types";
import Image from "next/image";
import React from "react";

const JournalDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const journalDetail: JournalProps | undefined = journalList.find((journal) => journal.id === parseInt(id));

  return (
    <div>
      <section className="md:grid md:grid-cols-12 text-center block">
        <div className="md:col-start-4 md:col-end-10">
          <p className="text-xs font-medium leading-[14.4px]">December 14, 2023</p>
          <h1 className="text-3xl font-medium leading-[38.4px] mt-9">{journalDetail?.title}</h1>
          <h6 className="mt-10 text-xs font-medium leading-[14.4px]">{journalDetail?.category}</h6>
        </div>
      </section>
      <section className="md:grid md:grid-cols-12 mt-[91px] block">
        <div className="col-start-4 col-end-10 w-full mx-auto">
          <div className="flex justify-center">
            <Image src={journalDetail!.headImage} alt={journalDetail!.title} width={620} height={620} className="md:h-[620px] h-full" />
          </div>
        </div>
      </section>

      <section className="md:grid md:grid-cols-12 mt-[128px] block">
        <div className="col-start-4 col-end-10 w-full mx-auto">
          <div className="flex justify-center flex-col gap-3 items-center">
            <p className="text-xs font-medium">
              Lorem ipsum dolor sit amet consectetur. Massa at augue at libero. Neque vitae habitant tempus felis tristique. At interdum mauris commodo scelerisque pulvinar rhoncus aenean volutpat tincidunt. Nisl rhoncus nullam facilisis
              senectus aliquam sit dui. Vivamus dapibus sagittis tellus mi eu scelerisque. Facilisis sit malesuada lectus metus. Quis enim phasellus id faucibus ac. Orci posuere pretium proin id ipsum hendrerit faucibus. Libero tempus
              faucibus nibh proin sit nisl. Tellus tortor ornare elit amet vel. Malesuada pharetra id non augue dictumst. In arcu velit nam et. Mauris aliquet suspendisse dolor neque sed urna tellus pellentesque pellentesque. Urna tincidunt
              nisl dictumst proin. Tortor massa tincidunt lectus posuere fusce vitae in elit sociis. Consequat nec in integer et et scelerisque turpis. Diam non ut interdum odio enim. Lectus velit aliquam ipsum cursus cursus sed amet tortor
              ultricies. Vulputate imperdiet sed tincidunt eu phasellus sagittis nulla. Sodales cursus tempus tristique aliquam et consectetur tristique in. Nam quis massa at dolor viverra viverra rhoncus vestibulum donec. Vitae leo amet id
              eu ultrices lectus. Lectus sed ac pulvinar mollis ipsum et vulputate rhoncus. Pulvinar massa morbi nisl dui. Tortor neque et enim risus lobortis.
            </p>
            <div>
              <Image src={journalDetail!.headImage} alt={journalDetail!.title} width={381} height={100} className="md:h-[506.61px] h-full" />
              <small className="opacity-30 mt-12">Image Caption</small>
            </div>
          </div>
        </div>
      </section>
      <section className="md:grid md:grid-cols-12 mt-[32px] block">
        <div className="col-start-4 col-end-10 w-full mx-auto">
          <div className="flex justify-center flex-col gap-3 items-center">
            <div className="w-full">
              <h2 className="text-2xl font-medium ">Headline</h2>
            </div>
            <p className="text-xs font-medium mt-3">
              Lorem ipsum dolor sit amet consectetur. Massa at augue at libero. Neque vitae habitant tempus felis tristique. At interdum mauris commodo scelerisque pulvinar rhoncus aenean volutpat tincidunt. Nisl rhoncus nullam facilisis
              senectus aliquam sit dui. Vivamus dapibus sagittis tellus mi eu scelerisque. Facilisis sit malesuada lectus metus. Quis enim phasellus id faucibus ac. Orci posuere pretium proin id ipsum hendrerit faucibus. Libero tempus
              faucibus nibh proin sit nisl. Tellus tortor ornare elit amet vel. Malesuada pharetra id non augue dictumst. In arcu velit nam et. Mauris aliquet suspendisse dolor neque sed urna tellus pellentesque pellentesque. Urna tincidunt
              nisl dictumst proin. Tortor massa tincidunt lectus posuere fusce vitae in elit sociis. Consequat nec in integer et et scelerisque turpis. Diam non ut interdum odio enim. Lectus velit aliquam ipsum cursus cursus sed amet tortor
              ultricies. Vulputate imperdiet sed tincidunt eu phasellus sagittis nulla. Sodales cursus tempus tristique aliquam et consectetur tristique in. Nam quis massa at dolor viverra viverra rhoncus vestibulum donec. Vitae leo amet id
              eu ultrices lectus. Lectus sed ac pulvinar mollis ipsum et vulputate rhoncus. Pulvinar massa morbi nisl dui. Tortor neque et enim risus lobortis.
            </p>
            <div>
              <Image src={journalDetail!.headImage} alt={journalDetail!.title} width={381} height={100} className="md:h-[506.61px] h-full" />
              <small className="opacity-30 mt-12">Image Caption</small>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-[32px] block">
        <div className="flex flex-col gap-6">
          <div className="flex justify-between">
            <h4 className="font-medium">Related journals</h4>
            <h6 className="uppercase">See All</h6>
          </div>

          <div className="max-w-[30.125em]">
            <JournalCard
              category={journalDetail!.category}
              description={journalDetail!.description}
              headImage={journalDetail!.headImage}
              id={journalDetail!.id}
              size={journalDetail!.size}
              subDetail={journalDetail!.subDetail}
              title={journalDetail!.title}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalDetail;
