import { resourcesLinks, platformLinks, communityLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="mt-20 border-t p-10 border-neutral-700">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-7">
        <div>
          <h3 className="text-md font-semibold mb-4">Resources</h3>
          <ul className="space-y-2">
            {resourcesLinks.map((link, index) => (
              <li key={index}>
                <a className="hover:text-gray-600" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Platform</h3>
          <ul className="space-y-2">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a className="hover:text-gray-600" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-md font-semibold mb-4">Community</h3>
          <ul className="space-y-2">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a className="hover:text-gray-600" href={link.href}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer