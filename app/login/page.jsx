"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import InputForm from "@/components/InputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { signIn, useSession, getSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [providers, setProviders] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  // const {data: session} = useSession();
  const router = useRouter();

  useEffect(() => {
    const setupProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setupProviders();
  }, []);

  const iconName = (provider) => {
    const providerName = provider.name;
    switch (providerName) {
      case "Google":
        return faGoogle;
      case "GitHub":
        return faGithub;
      default:
        return null;
    }
  };

  const handleSignIn = async (providerId) => {
    try {
      const result = await signIn(providerId, { callbackUrl: "/" });
      if (result?.error) {
        console.error("Login error:", result.error);
      }
    } catch (error) {
      console.error("Unexpected error during login:", error);
    }
  };
  const handleSignInCredentials = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      setError("Please, fill in all the inputs!");
      return;
    }
    const { email, password } = formData;
    try {
      const result = await signIn("credentials", {
        email: email,
        password: password,
        redirect: false,
        callbackUrl: "/",
      });
      console.log(result);
      if (result?.error) {
        setError("Wrong username and/or password!");
        return;
      }
      router.replace("/");
    } catch (error) {
      console.error("Unexpected error during credentials login:", error);
    }
  };

  return (
    <div className="container">
      <div className="max-w-md mx-auto">
        <div className="py-16">
          <div className="mx-auto relative rounded-full w-32 aspect-square overflow-hidden">
            <Image
              src="https://picsum.photos/1200/600"
              alt="avatar"
              fill={true}
            />
          </div>
        </div>
        <div className="text-center">
          <h1 className="font-heading text-h2 pb-4">Welcome Back!</h1>
          <p className="text-body1 pb-4">
            Login to access your favourite AI tools!
          </p>
        </div>
        <form
          className="flex flex-col py-4 gap-2"
          onSubmit={handleSignInCredentials}
        >
          <div className="flex items-center gap-4">
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-white"
              width={24}
            />
            <InputForm
              type={"text"}
              placeholder={"Email"}
              name={"email"}
              id={"email"}
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faLock} className="text-white" width={24} />
            <InputForm
              type={"password"}
              placeholder={"Password"}
              name={"password"}
              id={"password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
            />
          </div>
          {error && (
            <span className="text-error text-center text-danger">{error}</span>
          )}
          <div className="flex flex-col py-2">
            <button type="submit" className="btn-primary py-2 text-white">
              Login
            </button>
          </div>
          <div className="flex justify-between gap-1">
            <input
              type="checkbox"
              name="remember"
              id="remember"
              className="h-[1rem] w-[1rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-primary-500 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary-500 checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
            />
            <label htmlFor="remember" className="text-caption">
              Remember Me
            </label>
            <Link
              href=""
              className="text-caption text-right grow decoration-white hover:underline hover:underline-offset-2"
            >
              Forgot your password?
            </Link>
          </div>
        </form>
        <div className="relative flex py-5 items-center">
          <div className="flex-grow border-t dark:border-gray-950 border-gray-300"></div>
          <span className="flex-shrink mx-4 text-caption text-white">OR</span>
          <div className="flex-grow border-t dark:border-gray-950 border-gray-300"></div>
        </div>
        <div className="flex justify-center px-4 py-2 gap-4 ">
          {providers &&
            Object.values(providers)
              .filter((provider) => provider.name !== "credentials")
              .map((provider) => {
                return (
                  <button
                    key={provider.name}
                    onClick={() => handleSignIn(provider.id)}
                    className="btn-gray py-3 px-7 flex gap-2 items-center font-normal"
                  >
                    <FontAwesomeIcon
                      icon={iconName(provider)}
                      className="text-white"
                      width={20}
                    />
                    <span> {provider.name}</span>
                  </button>
                );
              })}
        </div>
        <div className="flex gap-2 justify-center pt-5 pb-16">
          <p className="text-caption">Don&apos;t have an account?</p>
          <Link
            href="/register"
            className="text-caption hover:underline hover:underline-offset-2 decoration-white"
          >
            {" "}
            Sign up for free!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
