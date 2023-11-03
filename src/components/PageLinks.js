import { pageLinks } from '../data'

const PageLinks = ({ parentClass, itemClass, parentId }) => {
  return (
    <ul className={parentClass} id={parentId}>
      {pageLinks.map((link) => {
        return (
          <li key={link.id}>
            <a href={link.href} className={itemClass}>
              {link.text}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
export default PageLinks
