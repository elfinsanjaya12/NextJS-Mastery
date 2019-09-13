//Method 1 - Layout as a Higher Order Component
// import withLayout from '../components/MyLayout';
// const Page = () => <p>Hello Next.js</p>;
// export default withLayout(Page);


//
import Layout from "../components/MyLayout"

const indexPageContent = <p>Hello Next.js</p>

export default function Index() {
  return <Layout content={indexPageContent}></Layout>
}