import { component$ } from "@builder.io/qwik";
// import {UnityButton} from "../../components/icons/unity-icon";
import ImageUnity from "~/components/img/unity.png?jsx";
// import "../../styles/animationStyle.css"

interface BtnUnityProps {}

export const BtnUnity = component$<BtnUnityProps>((props) => {
  {
    props;
  }


  
  return (
    <button class="unityImage rounded-full mb-[10px]">
      <ImageUnity />
    </button>
  );
});
