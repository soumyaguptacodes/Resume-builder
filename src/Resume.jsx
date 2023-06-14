import { useAppContext } from "./context/AppContext"
import { Link } from "react-router-dom"
import { Button } from "@chakra-ui/react"

function Resume() {
  const { list, setList } = useAppContext()
  console.log({ list })
  return (
    <>
      <main>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "5rem 0rem",
          }}
        >
          {list &&
            list
              ?.filter((i) => i.active === true)
              ?.map((itm, index) => (
                <div key={index}>
                  <div>{itm?.title}</div>
                </div>
              ))}
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={`/`}>
            <Button style={{ minWidth: "420px" }} colorScheme="purple">
              Go back
            </Button>
          </Link>
        </div>
      </main>
    </>
  )
}

export { Resume }
