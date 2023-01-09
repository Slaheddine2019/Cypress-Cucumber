

import {Given ,  When , Then } from 'cypress-cucumber-preprocessor'

Given('i connect to the application', ()=>{

    cypress.visit('www.google.com')
})