import React from 'react';
import './style.css';

const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const { open, close, header,component,joinBtn } = props;

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={close}>
                            &times;
                        </button>
                    </header>
                    <main>{component}</main>
                    <footer>
                        <button className="close" onClick={close}>
                            close
                        </button>
                        {joinBtn ? (
                            <button>제출하기
                            </button>
                        ):null}
                    </footer>
                </section>
            ) : null}
        </div>
    );
};

export default Modal;