import type { FC } from "react";
import { useNavigate } from "react-router";
import { Input } from "../components/ui/Input";
import { Button } from "../components/ui/Button";
import { ButtonVariant, User } from "../types";
import Section from "../components/layout/Section";
import ROUTE from "../constants/routes";
import { type SubmitHandler, useForm } from "react-hook-form";

const Registration: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<User>({
    mode: "onChange",
  });

  const onSubmitHandler: SubmitHandler<User> = (data) => {
    console.log(data);
  };

  return (
    <main className="relative w-dvw min-h-dvh bg-dark ">
      <Section className="relative h-dvh bg-transparent flex flex-col justify-center items-center p-5 lg:items-start lg:pl-20">
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden ">
          <img
            src="../images/login-image-desktop.png"
            alt="login-image"
            className="w-full h-full object-cover xl:object-contain object-right lg:mask-l-from-15% lg:mask-l-to-70% xl:mask-l-to-65% xxl:mask-l-to-35% mask-x-to-100% "
          />
        </div>

        <div className="z-40 w-full md:w-3/5 lg:w-1/3 lg:max-w-[350px] flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h1 className="mb-3 text-2xl text-light font-semibold text-center lg:text-left">
              Register here.
            </h1>
            <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmitHandler)}>
              <Input
                type="text"
                placeholder="firstname"
                error={errors.first_name}
                {...register("first_name", { required: "Firstname is required" })}
              />
              <Input
                type="text"
                placeholder="lastname"
                error={errors.last_name}
                {...register("last_name", { required: "Lastname is required" })}
              />
              <Input
                type="email"
                placeholder="email"
                error={errors.email}
                {...register("email", {
                  required: "Email is required",
                  validate: (value) => {
                    if (!value.match(/^[a-z0-9._%+-]+@[a-z0-9]+\.[a-z]{2,4}/)) {
                      return "Must be a correct email";
                    }
                    return true;
                  },
                })}
              />
              <Input
                type="password"
                placeholder="password"
                error={errors.password}
                {...register("password", { required: "Password is required" })}
              />
              <Input
                type="password"
                placeholder="confirm password"
                // {...register("conf_password")}
              />

              <Button
                type="submit"
                text="register"
                disabled={!isValid}
                aria-label="submit-registration"
                className="w-full mb-5"
              />
            </form>
            <Button variant={ButtonVariant.Tertiary} text="go back" className=" w-full" />
          </div>

          <div className="w-full flex flex-col gap-1 items-center">
            <p className="text-xs text-light">already have an account?</p>
            <Button
              variant={ButtonVariant.Secondary}
              text="login"
              className="w-full"
              onClick={() => navigate(ROUTE.LOGIN)}
            />
          </div>
        </div>
      </Section>
    </main>
  );
};

export { Registration };
