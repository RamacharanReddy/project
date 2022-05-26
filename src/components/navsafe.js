import React, { Component } from 'react';
class NavBar extends Component {
    state = {}; 
    render() { 
        return (
            <nav class="navbar-expand-lg navbar-light bg-light"> 
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                        <li class="nav-item dropdown">
                            <span class="nav-link dropdown-item " data-bs-toggle="modal" data-bs-target="#exampleModal">Change User</span> 
                        </li>
                        <li class="nav-item dropdown">
                        <label class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
                        Master Details
                        </label>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown" >
                            <a class="dropdown-item " href="#">Fcmg Companies</a>               
                            <a class="dropdown-item " href="#">Area Names</a>
                            <div class="dropend">
                                <button class="nav-link dropdown-toggle btn1 dropdown"  href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  name  =  "a">
                                Account Names
                                </button>
                                <div class="dropdown-menu" style="margin-left: 100%;margin-top: -15%;">
                                    <a class="dropdown-item"  name="clothing" >Organisation Details</a>
                                    <a class="dropdown-item"  name="footwear" href="#">Assests</a>
                                    <a class="dropdown-item"    >Liability</a>
                                    <a class="dropdown-item"    href="#">Income</a>
                                    <a class="dropdown-item"    href="#">Expense</a>
                                    <a class="dropdown-item"    href="#">Cash Book</a>
                                    <a class="dropdown-item"    href="#">Bank Accounts</a>
                                    <a class="dropdown-item"    href="#">Customer/Dealer</a>
                                    <a class="dropdown-item"    href="#">Suppiler</a>
                                    <a class="dropdown-item"    href="#">Employees</a>
                                    <a class="dropdown-item"  data-bs-toggle="modal" data-bs-target="#exampleModal">Customer Supplier</a>
                                    <a class="dropdown-item"    href="#">Customer Group Head</a>
                                </div>
                            </div>  
                            <div class="dropend">
                                <button class="nav-link dropdown-toggle btn1 dropdown"  href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  name  =  "a">
                                Product Details
                                </button>
                            </div>  
                            <a class="dropdown-item " href="#">Bank Names for Collection</a>
                            <div class="dropend">
                                <button class="nav-link dropdown-toggle btn1 dropdown"  href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  name  =  "a">
                                Dealer Area Change
                                </button>
                            </div>  
                            <div class="dropend">
                                <button class="nav-link dropdown-toggle btn1 dropdown"  href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  name  =  "a">
                                Scheme Details
                                </button>
                            </div>  
                            <div class="dropend">
                                <button class="nav-link dropdown-toggle btn1 dropdown"  href="#"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  name  =  "a">
                                Opening Balance
                                </button>
                            </div>  
                            <a class="dropdown-item " href="#">Role Details</a>
                            <a class="dropdown-item " href="#">username and Password</a>
                            <a class="dropdown-item " href="#">Year End Processing</a>
                            <a class="dropdown-item " href="#">Hide Finance Year</a>
                        </div>   
                        </li>
                        <li class="nav-item dropdown" >
                        <label class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  name  =  "a">
                        Regular Input
                        </label>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item " >Clothing</a>
                            <a class="dropdown-item " >Footwear</a>
                            <a class="dropdown-item " >Grooming</a>
                        </div>
                        </li>

                        <li class="nav-item dropdown">
                        <label class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  name="a">
                        Purchase Reports   
                        </label>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item "  name="clothing" href="#">Clothing</a>
                            <a class="dropdown-item "  name="footwear" href="#">Footwear</a>
                            <a class="dropdown-item "   href="#">Jewellery</a>
                        </div>
                        </li>
                        <li class="nav-item dropdown" >
                        <label class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"   >
                        Sales Report
                        </label>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item " href="#">Clothing</a>
                            <a class="dropdown-item " href="#">Footwear</a>
                            <a class="dropdown-item " href="#">Toys</a>
                        </div>
                        </li>
                        <li class="nav-item dropdown" >
                        <label class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
                        Transaction Report
                        </label>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item " href="#">Home Decor</a>
                        </div>
                        </li>
                        <li class="nav-item dropdown">
                        <label class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
                        Stock Details
                        </label>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item " href="#">Sports</a>
                        </div>
                        </li>
                        <li class="nav-item dropdown">
                            <label class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  >
                            Master Report
                            </label>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item " href="#">Sports</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}
 
export default NavBar;