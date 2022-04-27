import { Fragment } from 'react';
import { AppBar, Toolbar } from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';
const Header = () => {
  return(
    <Fragment>
      <AppBar position='relative'>
        <Toolbar>
          <CatchingPokemonIcon sx={{ mr: 2 }} />
          <h1>Pok&#233;mon&nbsp;Shop</h1>
        </Toolbar>
      </AppBar>
      <main>
        
      </main>
    </Fragment>
  )
}

export default Header;


