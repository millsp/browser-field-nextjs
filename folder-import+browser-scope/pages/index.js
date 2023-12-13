import { hello } from '../../package'

export const getServerSideProps = (async (context) => {
  return { props: { data: "some data" } }
})
 
export default function Page({ data }) {
  // browser.js ends up in frontend-bundle.js
  // node.js ends up in backend-bundle.js
  const result = hello()

  return data
}
