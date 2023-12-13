import { hello } from 'package'

export const getServerSideProps = (async (context) => {
  return { props: { data: "some data" } }
})
 
export default function Page({ data }) {
  const result = hello()

  return data
}
