import { Meta, StoryObj } from '@storybook/react';
import { Envelope } from 'phosphor-react';
import { TextInput, RootProps } from './TextInput';

export default {
    title: 'Components/TextInput',
    component: TextInput.Root,
    args:{
       children: (
        [
          <TextInput.Icon>
            <Envelope/>
          </TextInput.Icon>,
         <TextInput.Input  placeholder="Type your e-mail address" />
        ]
       )
    },
    argTypes:{
        children:{
            table: {
                disable: true,
            },
        }
    }
} as Meta<RootProps>

export const Default: StoryObj<RootProps> = {}

export const WithoutIcon: StoryObj<RootProps> = {
    args:{
        children: <TextInput.Input  placeholder="Type your e-mail address" />
     }
}
