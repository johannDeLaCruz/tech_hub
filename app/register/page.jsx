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
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  // const {data: session} = useSession();
  const router = useRouter();

  const handleRegistration = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError("Please fill in all fields!");
      return;
    } else if (formData.password.length < 8) {
      setError("Password must be at least 8 characters long!");
      return;
    }
    try {
      const response = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const form = e.target;
        form.reset();
        router.replace("/login/?registration=success");
      } else {
        const errorData = await response.text();
        setError(errorData);
      }
    } catch (error) {
      console.error("An error fetching data happened!", error);
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          onSubmit={handleRegistration}
        >
          <div className="flex items-center gap-4">
            <FontAwesomeIcon icon={faUser} className="text-white" width={24} />
            <InputForm
              type={"text"}
              placeholder={"Username"}
              name={"username"}
              id={"username"}
              value={formData.username}
              onChange={handleFormChange}
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
              onChange={handleFormChange}
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
              onChange={handleFormChange}
            />
          </div>
          {error && (
            <span className="text-error text-center text-danger">{error}</span>
          )}
          <div className="flex flex-col py-2">
            <button type="submit" className="btn-primary py-2 text-white">
              Register
            </button>
          </div>
          <div className="flex justify-between gap-2 text-caption">
            <p className=" text-right grow ">Already got an account?</p>
            <Link
              href="/login"
              className="hover:underline hover:underline-offset-2 decoration-white"
            >
              Login here!
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
