import React from "react"
import Box from "@mui/material/Box"
import { Grid } from "@mui/material"
import TextField from "@mui/material/TextField"

import TourTable from "./tourTable"

import { useDispatch } from "react-redux"

const OverView = () => {
  const dispatch = useDispatch()
  const [text, setText] = React.useState("")
  const [status, setStatus] = React.useState("Active")

  return (
    <div style={{ padding: "0" }}>
      <Box
        component='form'
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          p: 2,
          //   py: 4,
          //   pb: 1,
        }}
        noValidate
        autoComplete='off'
        style={{
          minWidth: "100%",
          fontSize: "16px",
          //   padding: "2",
          margin: "0",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={7}>
            <TextField
              id='outlined-multiline-flexible'
              label='Type to Search'
              multiline
              maxRows={4}
              fullWidth
              style={{ marginTop: "8px", marginBottom: "16px" }}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          {/* <div
            style={{
              display: "inline-block",
              width: "1px",
              height: "100%",
              marginRight: "16px",
              background: "rgb(221, 221, 221)",
              width: "2px",
            }}
          > */}
          <Grid item xs={12} sm={12} md={3}>
            {/* <InputLabel id='demo-select-small-label'>Status</InputLabel> */}
            {/* <span style={{ boxSizing: "border-box" }}>
              <Select
                labelId='demo-select-small-label'
                id='demo-select-small'
                style={{ marginTop: "8px", marginBottom: "16px" }}
                value={status}
                label='Status'
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value='none'>
                  <em>None</em>
                </MenuItem>
                <MenuItem value='Active' selected>
                  Active
                </MenuItem>

                <MenuItem value='inActive'>InActive</MenuItem>
              </Select>
            </span> */}
          </Grid>
          {/* </div> */}
        </Grid>
        <TourTable text={text} />
      </Box>
    </div>
  )
}

export default OverView
