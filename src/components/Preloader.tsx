interface IPreloader {
    load: boolean
}

const Preloader = ({load}: IPreloader) => {
    return <div id={load ? "preloader": "preloader-none"}></div>
}

export default Preloader