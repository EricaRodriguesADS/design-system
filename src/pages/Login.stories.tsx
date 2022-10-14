import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';
import { Login } from './Login';

export default {
    title: 'Pages/Login',
    component: Login,
    args: {},
    parameters: {
        msw: {
           handlers: [
              rest.post('/login',(req, res, ctx)=>{
                return res(ctx.json({
                    mensage: 'Login realizado!'
                }))
              })
           ]
        }
    }
} as Meta

export const Default: StoryObj = {
    play: async ({canvasElement})=> {
    const canva = within(canvasElement)

     userEvent.type(canva.getByPlaceholderText('Digite seu e-mail'), 'test@email.com')
     userEvent.type(canva.getByPlaceholderText('***********'), '12345')
     userEvent.click(canva.getByRole('button'))

    await waitFor(()=>{
      return  expect(canva.getByText('Login realizado!')).toBeInTheDocument()
    }) 
   }
}
