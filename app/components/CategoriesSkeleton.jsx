import ContentLoader from "react-content-loader"

const CategoriesSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={30}
    viewBox="0 0 400 30"
    backgroundColor="#eeeeee"
    foregroundColor="#cdc8f2a6"
    {...props}
  >
    <rect x="3" y="10" rx="2" ry="2" width="90" height="15" /> 
    <rect x="102" y="10" rx="2" ry="2" width="90" height="15" /> 
    <rect x="201" y="10" rx="2" ry="2" width="90" height="15" /> 
    <rect x="298" y="10" rx="2" ry="2" width="90" height="15" />
  </ContentLoader>
)

export default CategoriesSkeleton

