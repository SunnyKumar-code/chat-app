import { Avatar, Box, Divider, IconButton, Stack, styled, Switch, useTheme } from "@mui/material";

import Logo from "../../assets/Images/logo.ico"
import { Nav_Buttons } from "../../data"

import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import useSettings from "../../hooks/useSettings"

const AntSwitch = styled(Switch)(({ theme }) => ({
  width: 40,
  height: 20,
  padding: 0,
  display: 'flex',
  '&:active': {
    '& .MuiSwitch-thumb': {
      width: 15,
    },
    '& .MuiSwitch-switchBase.Mui-checked': {
      transform: 'translateX(9px)',
    },
  },
  '& .MuiSwitch-switchBase': {
    padding: 2,
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: '#1890ff',
        ...(theme.palette.mode === 'dark' && {
          backgroundColor: '#177ddc',
        }),
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxShadow: '0 2px 4px 0 rgb(0 35 11 / 20%)',
    width: 16,
    height: 16,
    borderRadius: 8,
    transition: theme.transitions.create(['width'], {
      duration: 200,
    }),
  },
  '& .MuiSwitch-track': {
    borderRadius: 20 / 2,
    opacity: 1,
    backgroundColor: 'rgba(0,0,0,.25)',
    boxSizing: 'border-box',
    ...(theme.palette.mode === 'dark' && {
      backgroundColor: 'rgba(255,255,255,.35)',
    }),
  },
}));



const DashboardLayout = () => {
  const [selected, setSelected] = useState(0)

  const theme = useTheme();
  console.log(theme);
  const { onToggleMode } = useSettings();

  return (
    <>
      <Box
        p={2}
        sx={{ backgroundColor: theme.palette.background.paper, boxShadow: "0px 0px 2px rgba(0,0,0,0.25)", height: "100vh", width: 100 }}
      >
        <Stack spacing={3} direction="column" justifyContent="space-between" alignItems={"center"} sx={{
          height: "100%"
        }}>
          <Stack alignItems={"center"} spacing={4}>
            <Box sx={{
              backgroundColor: theme.palette.primary.main,
              width: 64,
              height: 64,
              borderRadius: 1.5,
            }}>
              <img src={Logo} alt="Chat App logo" />
            </Box>
            <Stack sx={{ width: "max-content" }} direction="column" alignItems="center" spacing={3}>
              {Nav_Buttons.map((el) => (
                selected === el.index ?
                  <Box
                    key={el.index}
                    sx={{
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5
                    }}
                  >
                    <IconButton
                      onClick={() => setSelected(el.index)}
                      sx={{
                        width: "max-content",
                        color: "#fff"
                      }}
                    >
                      {el.icon}
                    </IconButton>
                  </Box>
                  :

                  <IconButton
                    onClick={() => setSelected(el.index)}
                    sx={{
                      width: "max-content",
                      color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary
                    }}
                  >
                    {el.icon}
                  </IconButton>

              ))}
              <Divider sx={{ width: "48px" }} />
              {
                selected === 3 ?
                  <Box
                    sx={selected === 3 ? {
                      backgroundColor: theme.palette.primary.main,
                      borderRadius: 1.5
                    } : {}}
                  >
                    <IconButton
                      onClick={() => setSelected(3)}
                      sx={{
                        width: "max-content",
                        color: "#fff"
                      }}
                    >
                      <Gear />
                    </IconButton>
                  </Box>
                  :
                  <IconButton
                    onClick={() => setSelected(3)}
                    sx={{
                      width: "max-content",
                      color: theme.palette.mode === "light" ? "#000" : theme.palette.text.primary
                    }}
                  >
                    <Gear />
                  </IconButton>
              }



            </Stack>
          </Stack>

          <Stack spacing={4}>
            <AntSwitch onChange={() => {
              onToggleMode()
            }} defaultChecked />
            <Avatar src={"https://i.pravatar.cc/300"} />
          </Stack>
        </Stack>
      </Box>
      <Outlet />
    </>
  );
};

export default DashboardLayout;
