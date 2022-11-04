import { FaOpencart } from 'react-icons/fa';


const NavBar = () =>{
    return(
        
        <header className="fixed-top">
      
      <nav className="navbar navbar-expand-lg shadow navbar-dark py-3 ">
            <div className="container-fluid">
            <h1>Cherry Drinks </h1>
            <button 
                class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navMenu" 
                >
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
            <ul class="navbar-nav ms-auto mb-2 ml-lg-0">
                    <li className="nav-item ">
                        <a className="nav-link active" aria-current="page" href="index.html"></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="servicios.html">Espumantes</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link" href="staff.html">Bebidas Blancas</a>
                    </li>
                    <li className="nav-item ">
                        <a className="nav-link active" href="galeria.html">Carrito<FaOpencart /></a>
                    </li>
                    </ul>
                    
                </div>
                </div>
            </nav>
                  
    </header>
    
    )
}


export default NavBar;