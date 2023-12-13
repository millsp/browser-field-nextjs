export const getServerSideProps = (async (context) => {
  return { props: { data: "some data" } }
})
 
export default function Page({ data }) {
  return data
}
