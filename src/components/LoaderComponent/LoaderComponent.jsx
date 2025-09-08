import Page from "@/app/page/page";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";

export const LoaderComponent = ({ name = "Loading..." }) => {
  return (
    <Page>
      <div className="relative h-96 overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(100)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-40"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                scale: Math.random() * 1.2,
                opacity: 0,
              }}
              animate={{
                y: -100,
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 5 + Math.random() * 5,
                repeat: Infinity,
                delay: Math.random() * 3,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="z-10 px-10 py-12 rounded-3xl backdrop-blur-md text-center"
        >
          <motion.div
            className="relative w-20 h-20 mx-auto mb-6"
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
          >
            {/* Blue Loader Border */}
            <div className="absolute inset-0 rounded-full border-t-4 border-[#2563eb] animate-spin" />

            {/* Blue Glow */}
            <div className="absolute inset-4 bg-gradient-to-tr from-[#2563eb] via-[#3b82f6] to-[#1e40af] rounded-full blur-xl opacity-30" />
          </motion.div>
        </motion.div>
      </div>
    </Page>
  );
};

export const ErrorComponent = ({ message, refetch }) => {
  return (
    <Page>
      <Card className="w-full max-w-md mx-auto mt-10 bg-gradient-to-b from-[#2563eb] to-[#1e3a8a] text-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-red-300">{message}</CardTitle>
        </CardHeader>
        <CardContent>
          <Button
            onClick={refetch}
            variant="outline"
            className="border-white text-white hover:bg-blue-600"
          >
            Try Again
          </Button>
        </CardContent>
      </Card>
    </Page>
  );
};

export const WithoutLoaderComponent = ({ name }) => {
  return (
    <div className="relative h-96 overflow-hidden flex items-center justify-center">
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-sidebar-primary rounded-full opacity-40"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              scale: Math.random() * 1.2,
              opacity: 0,
            }}
            animate={{
              y: -100,
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 5,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="z-10 px-10 py-12 rounded-3xl backdrop-blur-md text-center"
      >
        <motion.div
          className="relative w-20 h-20 mx-auto mb-6"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.8, ease: "linear" }}
        >
          <div className="absolute inset-0 rounded-full border-t-4 border-[#2563eb] animate-spin" />

          <div className="absolute inset-4 bg-gradient-to-tr from-[#2563eb] via-[#3b82f6] to-[#1e40af] rounded-full blur-xl opacity-30" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export const WithoutErrorComponent = ({ message, refetch }) => {
  return (
    // <Page>
    <Card className="w-full max-w-md mx-auto mt-10">
      <CardHeader>
        <CardTitle className="text-destructive">{message}</CardTitle>
      </CardHeader>
      <CardContent>
        <Button onClick={refetch} variant="outline">
          Try Again
        </Button>
      </CardContent>
    </Card>
    // </Page>
  );
};
