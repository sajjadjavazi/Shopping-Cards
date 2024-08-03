import Post from './components/post/Post'
import Layout from './layout/layout'
function App() {

  return (
    <Layout>
      <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <Post title="rolls roys culis" description='made by mansory' price={2.5} pricebadge='Mil'
        />
        <Post title="rolls roys culis" description='made by mansory' price={2.5} pricebadge='Mil'
        />
        <Post title="rolls roys culis" description='made by mansory' price={2.5} pricebadge='Mil'
        />
        <Post title="rolls roys culis" description='made by mansory' price={2.5} pricebadge='Mil'
        />
        <Post title="rolls roys culis" description='made by mansory' price={2.5} pricebadge='Mil'
        />
        <Post title="rolls roys culis" description='made by mansory' price={2.5} pricebadge='Mil'
        />
        <Post title="rolls roys culis" description='made by mansory' price={2.5} pricebadge='Mil'
        />
      </div>
    </div>
    </Layout>
  )
}

export default App
