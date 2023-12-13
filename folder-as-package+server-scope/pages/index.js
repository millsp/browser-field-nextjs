import { hello } from 'package'

export const getServerSideProps = (async (context) => {
  // node.js ends up in backend-bundle.js
  const result = hello()

  return { props: { data: "some data" } }
})
 
export default function Page({ data }) {
  return data
}
