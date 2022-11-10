import { Container, PrimaryButton } from "../../styledComponents";
import { FaDiscord } from "react-icons/fa";
import Parallax from "../../framerMotion/Parallax";

const Join = () => {
  return (
    <Parallax>
      <Container className="w-full">
        <div className="flex rounded-[50px] fmd:px-2 child:text-center justify-center flex-col gap-7 px-10 py-12 bg-secondary">
          <p className="text-[3em] mx-auto child:font-bold child:capitalize">
            Join Our Community
          </p>
          <p className="text-b1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis
            debitis, vitae ipsam fugiat quod nihil cumque ut impedit quaerat
            est, voluptates optio quas repellat explicabo deserunt architecto
            ratione ullam temporibus?
          </p>
          <div className="self-center">
            <PrimaryButton buttonStyle="contained">
              <span>
                <FaDiscord />
              </span>
              <span>Launch Discord</span>
            </PrimaryButton>
          </div>
        </div>
      </Container>
    </Parallax>
  );
};

export default Join;
