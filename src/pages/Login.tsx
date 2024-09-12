import { useState } from 'react'
import LoginCardView from '../features/authentication/LoginCardView'
import TextComponent from '../features/authentication/common/TextComponent'
import RedirectWrapper from '../wrapper/RedirectWrapper'
import RegisterCardView from '../features/authentication/RegisterCardView'
import NoLoginRoute from '../wrapper/NoLoginRoute'

const Login = () => {

  const [isLogin, setIsLogin] = useState<boolean>(true)

  const handleToggleState = () => {
    setIsLogin((state) => !state)
  }

  return (
    <NoLoginRoute>
        <div className="flex flex-col justify-center items-center h-screen">
            <div>    
                {isLogin ? (
                    <>
                        <LoginCardView />
                        <RedirectWrapper>
                            Don't have an account? 
                            <TextComponent title='Register' handleToggleState={handleToggleState}/>
                        </RedirectWrapper>
                    </>
                ): (
                    <>
                        <RegisterCardView />
                        <RedirectWrapper>
                            Already have an account? 
                            <TextComponent title='Login' handleToggleState={handleToggleState} />
                        </RedirectWrapper>
                    </>
                )
                }

            </div>
        </div>
    </NoLoginRoute>
  )
}

export default Login;