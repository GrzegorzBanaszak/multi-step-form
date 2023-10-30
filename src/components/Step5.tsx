import IconThankYou from "@/icons/IconThankYou";

const Step5 = () => {
  return (
    <div className="py-8 px-4 flex flex-col justify-center items-center h-full">
      <IconThankYou className="mb-4 w-[60px] h-[60px] lg:w-auto lg:h-auto" />

      <h2 className="font-bold text-2xl my-3 lg:text-3xl">Thank You!</h2>
      <p className="text-center text-coolGray ">
        Thanks for confirming your subscription! <br />
        We hope you have fun using ouer platform. If you ever need support,
        please feel free to email us at support@loremgaming.com
      </p>
    </div>
  );
};

export default Step5;
