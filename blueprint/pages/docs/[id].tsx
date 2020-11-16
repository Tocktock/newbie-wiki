import { InferGetServerSidePropsType } from "next";

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`localhost:9090/api/documents/${ctx.param("id")}`);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
};

function Document({}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <></>;
}
