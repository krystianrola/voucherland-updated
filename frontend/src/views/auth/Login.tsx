import type { FC } from "react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ButtonVariant } from "@/types";
import { useNavigate } from "react-router";
import { SubmitHandler, useForm } from "react-hook-form";
import ROUTE from "@/constants/routes";
import Section from "@/components/layout/Section";
import { LoginCredentials } from "@/types/api";
import { useAuthStore } from "@/store/AuthStore";

const Login: FC = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<LoginCredentials>({ mode: "onChange" });
  const { loading, login } = useAuthStore();

  const onSubmitHandler: SubmitHandler<LoginCredentials> = async (data) => {
    try {
      await login(data);

      console.log("After login - success");

      navigate(ROUTE.HOME, { replace: true });
    } catch (error) {
      console.error("err login: " + error); // for future error handling
    }

    console.log("Submit handler finished");
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
              Log in.
            </h1>
            <form onSubmit={handleSubmit(onSubmitHandler)} className="flex flex-col gap-2">
              <Input
                type="email"
                placeholder="email"
                autoComplete="email"
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
                autoComplete="current-password"
                error={errors.password}
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 1,
                    message: "Password must have at least 8 characters",
                  },
                })}
              />
              <div className="flex flex-row justify-between">
                <p className="text-xs text-light">remember me</p>
                <p className="text-xs text-light">forgot password?</p>
              </div>

              <Button
                text={`${loading ? "login" : "loading"}`}
                type="submit"
                disabled={!isValid}
                aria-label="submit-login"
                className="w-full mb-5"
              />
            </form>
            <Button
              variant={ButtonVariant.Tertiary}
              text="go back"
              className=" w-full"
              onClick={() => navigate(ROUTE.HOME)}
            />
          </div>

          <div className="w-full flex flex-col gap-1 items-center">
            <p className="text-xs text-light">no account yet?</p>
            <Button
              variant={ButtonVariant.Secondary}
              text="register"
              className="w-full"
              onClick={() => navigate(ROUTE.REGISTER)}
            />
          </div>
        </div>
      </Section>
    </main>
  );
};

export { Login };
