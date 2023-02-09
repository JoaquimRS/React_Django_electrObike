

const Login = () => {

    const hundleSubmit = (e) => {
        e.preventDefault();
        console.log('hundleSubmit');
    }

    return (
        <div>
            <form onSubmit={hundleSubmit}>
                <input type="text" name="email" placeholder="Email" />
                <input type="password" name="password" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )

}

export default Login