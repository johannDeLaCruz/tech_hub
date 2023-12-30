"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import InputForm from "@/components/InputForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLock, faUser } from "@fortawesome/free-solid-svg-icons";
import { faGoogle, faGithub } from "@fortawesome/free-brands-svg-icons";
import { signIn, useSession, getSession, getProviders } from "next-auth/react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const [providers, setProviders] = useState(null);
  const [formData, setFormData] = useState({ email: "", password: "" });
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
    const { email, password } = formData;
    try {
      const result = await signIn("credentials", {
        email,
        password,
        redirect: false,
        callbackUrl: "/",
      });
      console.log(result);
      if (result?.error) {
        console.error("Login with credentials error:", result.error);
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
          <h1 className="font-heading text-h2 pb-4">Welcome!</h1>
          <p className="text-body1 pb-4">
            Register to add items to your favorites and more!
          </p>
        </div>
        <form
          className="flex flex-col pt-4 pb-20 gap-2"
          onSubmit={handleSignInCredentials}
        >
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faUser} className="text-white" width={24} />
            <InputForm
              type={"text"}
              placeholder={"Username"}
              name={"username"}
              id={"username"}
              value={formData.username}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
            />
          </div>
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
          <div className="flex flex-col py-2">
            <button type="submit" className="btn-primary py-2 text-white">
              Register
            </button>
          </div>
          <div className="flex justify-between gap-2 text-caption">
            <p className=" text-right grow ">
              Already got an account?
            </p>
            <Link
              href="/login"
              className="hover:underline hover:underline-offset-2 decoration-white"
            >
              Login
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
