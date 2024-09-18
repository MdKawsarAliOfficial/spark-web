const ServiceItem = ({iconClass, title, desc}) => {
    return (
        <div className="item">
            <i className={iconClass}></i>
            <h3>{title}</h3>
            <p className="cmn_para">{desc}</p>
        </div>
    );
};

export default ServiceItem;