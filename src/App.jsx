import { useRef } from "react"
import { useAppContext } from "./context/AppContext"
import { Menu, Info, Edit2 } from "lucide-react"
import { Tooltip } from "@chakra-ui/react"
import { Switch } from "@chakra-ui/react"
import { Text } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

const App = () => {
  const dragItem = useRef()
  const dragOverItem = useRef()
  const { list, setList } = useAppContext()

  const dragStart = (e, position) => {
    dragItem.current = position
    console.log(e.target.innerHTML)
  }

  const dragEnter = (e, position) => {
    dragOverItem.current = position
    console.log(e.target.innerHTML)
  }

  const drop = () => {
    const copyListItems = [...list]
    const dragItemContent = copyListItems[dragItem.current]
    copyListItems.splice(dragItem.current, 1)
    copyListItems.splice(dragOverItem.current, 0, dragItemContent)
    dragItem.current = null
    dragOverItem.current = null
    setList(copyListItems)
  }

  const handleNameChange = (e, index) => {
    const newList = [...list]
    newList[index] = {
      ...newList[index],
      title: e.target.value,
    }
    setList(newList)
  }

  const handleCheck = (itemToUpdate) => {
    const newList = list.map((item) => {
      if (item.id === itemToUpdate.id) {
        return {
          ...item,
          active: !item.active, // Toggle the value of 'active'
        }
      }
      return item
    })
    setList(newList)
  }

  return (
    <>
      <div style={{ textAlign: "center", margin: "2rem 0rem" }}>
        <Text fontSize="3xl">Select your sections</Text>
      </div>
      {list &&
        list.map((item, index) => (
          <div key={index}>
            <main
              style={{
                margin: "0px 10%",
                textAlign: "center",
                fontSize: "1rem",
                display: "grid",
                gridTemplateColumns: "1fr 1fr 12fr 1fr 1fr",
                alignItems: "center",
                justifyItems: "center",
                padding: "1rem",
              }}
            >
              <div
                style={{ cursor: "pointer" }}
                onDragStart={(e) => dragStart(e, index)}
                onDragEnter={(e) => dragEnter(e, index)}
                onDragEnd={drop}
                draggable
              >
                <Menu />
              </div>
              <div>
                <Tooltip label={item?.title} placement="top">
                  <Info />
                </Tooltip>
              </div>
              <div>
                <input
                  type="text"
                  value={item?.title}
                  onChange={(e) => handleNameChange(e, index)}
                  style={{ all: "unset" }}
                />
              </div>
              <div>
                <Edit2 onClick={() => console.log("clickk")} />
              </div>
              <div>
                <Switch isChecked={item.active} onChange={() => handleCheck(item)} size="md" />
              </div>
            </main>
            <hr style={{ margin: "0px 10%" }} />
          </div>
        ))}
      <br />
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Link to={`/resume`}>
          <Button style={{ minWidth: "420px" }} colorScheme="purple">
            Save and Next
          </Button>
        </Link>
      </div>
      <br />
      <br />
    </>
  )
}

export default App
