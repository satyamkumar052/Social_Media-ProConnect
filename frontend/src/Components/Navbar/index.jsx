import React, { useEffect } from 'react'
import styles from "./styles.module.css"
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux';
import { reset } from '@/config/redux/reducer/authReducer';
import { getPendingConnectionRequests } from '@/config/redux/action/authAction';

function Navbar() {

    const router = useRouter();
    const dispatch = useDispatch();
    const authState = useSelector((state) => state.auth);

    useEffect(() => {
        const token = localStorage.getItem("token");
        if (token) {
            dispatch(getPendingConnectionRequests({ token }));
        }
    }, [dispatch]);

    const pendingCount = authState.pendingConnectionRequests?.length || 0;

    return (
        <div className={styles.container}>
            <nav className={styles.navbar}>

                <h1 onClick={() => router.push("/dashboard")}>
                    <img src="/images/proconnect.jpg" alt="ProConnect logo" />
                </h1>

                <div className={styles.navbarOptionContainer}>

                    {authState.profileFetched && (
                        <div className={styles.navLinks}>
                            <div
                                className={styles.notificationButton}
                                onClick={() => router.push("/my_connections")}
                            >
                                Requests
                                {pendingCount > 0 && (
                                    <span className={styles.badge}>{pendingCount}</span>
                                )}
                            </div>

                            <span
                                className={styles.navItem}
                                onClick={() => router.push("/profile")}
                            >
                                Profile
                            </span>

                            <span
                                className={styles.logoutBtn}
                                onClick={() => {
                                    localStorage.removeItem("token");
                                    dispatch(reset());
                                    router.push("/login");
                                }}
                            >
                                Logout
                            </span>
                        </div>
                    )}

                    {!authState.profileFetched && (
                        <div
                            className={styles.buttonJoin}
                            onClick={() => router.push("/login")}
                        >
                            Be a part
                        </div>
                    )}

                </div>

            </nav>
        </div>
    );
}

export default Navbar;
