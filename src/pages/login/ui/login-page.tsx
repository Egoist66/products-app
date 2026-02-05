// Страница /login (заглушка).
// Здесь позже добавите:
// - инпут логина
// - валидацию, что логин === "admin"
// - переход на /products по кнопке.

import {PasswordInput} from '@mantine/core';
import {LoginButton} from '../../../features/auth/login-button/ui/login-button';

export default function LoginPage() {
    return (
        <main>
            <h1>Login page stub</h1>

            {/* Здесь позже сделаете управляемый инпут логина */}
            <div>
                <label>
                    Login (stub):
                    <PasswordInput label="Input label" description="Input description" placeholder="Input placeholder"/>
                </label>
            </div>

            {/* Кнопка, куда позже добавите проверку логина и навигацию */}
            <div>
                <LoginButton/>
            </div>
        </main>
    );
};
