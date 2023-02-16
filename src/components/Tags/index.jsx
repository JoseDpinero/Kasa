import './_tags.scss'

function Tags({ tags }) {
  return (
    <ul className="list">
      {tags.map((tag, index) => (
        <li key={tag + index} className="list__tag">
          {tag}
        </li>
      ))}
    </ul>
  )
}
export default Tags
