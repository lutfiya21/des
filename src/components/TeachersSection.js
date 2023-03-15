import { leftIcon, rightIcon } from "../icons";
import HTwo from "./HTwo";
import SubHeader from "./SubHeader";
import { Swiper, SwiperSlide } from "swiper/react";
// import required modules
import { Pagination, Navigation } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { useRef, useState } from "react";

function TeachersSection() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const [isProvDisabled, setIsProvDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  return (
    <div className=" mt-[234px]">
      <SubHeader innerText={"Key Persons"} />
      <div className="flex justify-between">
        <HTwo innerText={"Meet our teachers"} />
        <div className="flex space-x-[30px]">
          <LeftOrRightBtn
            isRight={false}
            isDisabled={isProvDisabled}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
          <LeftOrRightBtn
            isRight={true}
            isDisabled={isNextDisabled}
            navigationPrevRef={navigationPrevRef}
            navigationNextRef={navigationNextRef}
          />
        </div>
      </div>
      <Carousel
        navigationPrevRef={navigationPrevRef}
        navigationNextRef={navigationNextRef}
        setIsProvDisabled={setIsProvDisabled}
        setIsNextDisabled={setIsNextDisabled}
      />
    </div>
  );
}

export default TeachersSection;

function Carousel(props) {
  return (
    <Swiper
      slidesPerView={3}
      spaceBetween={70}
      slidesPerGroup={3}
      loop={false}
      onTransitionEnd={(e) => {
        if (e.isBeginning == true) {
          props.setIsProvDisabled(true);
        } else {
          props.setIsProvDisabled(false);
        }
        if (e.isEnd == true) {
          props.setIsNextDisabled(true);
        } else {
          props.setISNextDisabled(false);
        }
      }

      }
      loopFillGroupWithBlank={true}
      navigation={{
        prevEl: props.navigationPrevRef.current,
        nextEl: props.navigationNextRef.current,
      }}
      onBeforeInit={(swiper) => {
        swiper.params.navigation.prevEl = props.navigationPrevRef.current;
        swiper.params.navigation.nextEl = props.navigationNextRef.current;
      }}
      modules={[Pagination, Navigation]}
      className=" mt-[60px]"
    >
      <SwiperSlide>
        <TutorCard
          fullName={"Christian Howard"}
          profile_image={"/tutor1.png"}
          flag_image={"/italy.png"}
          citizen={"Italian"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TutorCard
          fullName={"Christian Howard"}
          profile_image={
            "data:image/jpeg;base64,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"
          }
          flag_image={"/italy.png"}
          citizen={"Italian"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TutorCard
          fullName={"Christian Howard"}
          profile_image={"/tutor1.png"}
          flag_image={"/italy.png"}
          citizen={"Italian"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TutorCard
          fullName={"Christian Howard"}
          profile_image={"/tutor1.png"}
          flag_image={"/italy.png"}
          citizen={"Italian"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TutorCard
          fullName={"Christian Howard"}
          profile_image={"/tutor1.png"}
          flag_image={"/italy.png"}
          citizen={"Italian"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <TutorCard
          fullName={"Christian Howard"}
          profile_image={"/tutor1.png"}
          flag_image={"/italy.png"}
          citizen={"Italian"}
        />
      </SwiperSlide>
    </Swiper>
  );
}

function TutorCard(props) {
  return (
    <div>
      <img
        className="w-full aspect-[4/5] object-cover"
        src={props.profile_image}
      />
      <span className=" text-myBlack text-[24px]">{props.fullName}</span>
      <div className="flex items-center">
        <img className="w-[34px] h-[34px]" src={props.flag_image} />
        <span>{props.citizen}</span>
      </div>
    </div>
  );
}

function LeftOrRightBtn(props) {
  return (
    <button
      ref={props.isRight ? props.navigationNextRef : props.navigationPrevRef}
      className={`${
        !props.isDisabled
          ? "bg-myPurple"
          : "bg-transparent border border-[#E8E8F6]"
      } w-[56px] h-[56px] flex justify-center items-center rounded-full`}
    >
      {props.isRight ? rightIcon : leftIcon}
    </button>
  );
}
