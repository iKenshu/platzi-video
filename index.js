import React, { Component } from 'react'
import { render } from 'react-dom'

import Media from './src/playlist/components/media'

const app = document.getElementById('app')

render(<Media type="video" title="¿Qué es Responsive Design?" author="Leonidas Esteban" image="./images/covers/responsive.jpg" />, app)