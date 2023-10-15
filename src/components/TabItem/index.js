// Write your code here

import './index.css'

const TabItem = props => {
  const {tabDetails, isActive, onClickTabItem} = props
  const {tabId, displayText} = tabDetails
  // console.log(isActive)
  // console.log(tabId)
  const activeTabStateClassName = isActive
    ? 'tab-item-name tab-active-blue'
    : 'tab-item-name'

  const tabItemClick = () => {
    onClickTabItem(tabId)
  }

  return (
    <li className="tab-list-item">
      <button
        type="button"
        className={activeTabStateClassName}
        onClick={tabItemClick}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
