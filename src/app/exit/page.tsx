"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import axios from "axios";
import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";
import { useState } from "react";

export default function LibraryEntryForm() {
  const [enrollmentNumber, setEnrollmentNumber] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!enrollmentNumber.trim()) {
      setError("Please enter your enrollment number");
      return;
    }
    try {
      const response = await axios.post("http://localhost:5000/api/exit", {
        id: enrollmentNumber,
        status: "exit",
        token: "wwQaJTAjYWc6EIn1JxjEVH3OW75ZKMgt",
      });
      if (response.status === 201) {
        setSuccess(true);
        setEnrollmentNumber("");
      }
    } catch (error) {
      console.log({ error });
      setError("Invalid enrollment number");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75 }}
      >
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
              <BookOpen className="mr-2" />
              Library Exit
            </CardTitle>
            <CardDescription className="text-center">
              Enter your enrollment number to exit the library
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Input
                  type="text"
                  placeholder="Enrollment Number"
                  value={enrollmentNumber}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setEnrollmentNumber(e.target.value)
                  }
                  className="w-full"
                />
                {error && <p className="text-sm text-red-500">{error}</p>}
              </div>
              <Button type="submit" className="w-full">
                Exit Library
              </Button>
            </form>
            {success && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center text-green-600"
              >
                Hope to see you again!
              </motion.p>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </main>
  );
}
