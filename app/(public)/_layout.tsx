import React from 'react'
import { Stack } from 'expo-router'

const PublicLayout = () => {
    return (
        <Stack
            screenOptions={{
                headerStyle: {
                    backgroundColor: '#6c47ff',
                    
                },
                headerTintColor: '#fff',
                headerBackTitle: 'Back',
                
            }}>
            <Stack.Screen
                name="login"
                options={{
                    headerShown: false
                }}></Stack.Screen>
            <Stack.Screen
                name="register"
                options={{
                    headerTitle: 'Create Account'
                    
                }}></Stack.Screen>
            <Stack.Screen
                name="reset"
                options={{
                    headerTitle: 'Reset Passwor₫'
                }}></Stack.Screen>
            
        </Stack>
    )
}

export default PublicLayout