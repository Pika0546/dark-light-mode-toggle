import React, { useMemo } from "react";
import styles from "./DarkmodeToggleButton.module.scss";
export const MODE = {
    DARK: "DARK",
    LIGHT: "LIGHT",
};

export const DarkmodeToggleButton = ({ onClick, mode }) => {
    return (
        <button
            onClick={onClick}
            className={`${styles["button"]} ${
                mode === MODE.DARK ? styles["light"] : styles["dark"]
            }`}
        >
            {/* ============== SLIDER ============= */}
            <span
                className={`${styles["slider"]} ${
                    mode === MODE.DARK ? styles["light"] : styles["dark"]
                }`}
            />

            {/* ============== CLOUD ============= */}
            <img
                alt="a"
                src="/images/cloud.png"
                className={`${styles["cloud"]} ${
                    mode === MODE.DARK ? styles["show"] : styles["hide"]
                }`}
            />
            <img
                alt="a"
                src="/images/cloud.png"
                className={`${styles["cloud"]} ${styles["blur"]} ${
                    mode === MODE.DARK ? styles["show"] : styles["hide"]
                }`}
            />

            {/* ============== STAR ============= */}

            <div
                className={`${styles["sprinkle"]} ${styles["star"]} ${styles["first"]} ${
                    styles["lg"]
                } ${mode === MODE.DARK ? styles["hide"] : styles["show"]}`}
            />
            <div
                className={`${styles["sprinkle"]} ${styles["star"]} ${styles["second"]} ${
                    styles["lg"]
                } ${mode === MODE.DARK ? styles["hide"] : styles["show"]}`}
            />
            <div
                className={`${styles["sprinkle"]} ${styles["star"]} ${styles["third"]} ${
                    styles["md"]
                } ${mode === MODE.DARK ? styles["hide"] : styles["show"]}`}
            />

            {/* ============== CIRCLE ============= */}
            <div
                className={`${styles["sprinkle"]} ${styles["circle"]} ${styles["first"]} ${
                    styles["md"]
                } ${mode === MODE.DARK ? styles["hide"] : styles["show"]}`}
            />
            <div
                className={`${styles["sprinkle"]} ${styles["circle"]} ${styles["second"]} ${
                    styles["md"]
                } ${mode === MODE.DARK ? styles["hide"] : styles["show"]}`}
            />
            <div
                className={`${styles["sprinkle"]} ${styles["circle"]} ${styles["third"]} ${
                    styles["sm"]
                } ${mode === MODE.DARK ? styles["hide"] : styles["show"]}`}
            />
            <div
                className={`${styles["sprinkle"]} ${styles["circle"]} ${styles["fourth"]} ${
                    styles["sm"]
                } ${mode === MODE.DARK ? styles["hide"] : styles["show"]}`}
            />
             <div
                className={`${styles["sprinkle"]} ${styles["circle"]} ${styles["fifth"]} ${
                    styles["sm"]
                } ${mode === MODE.DARK ? styles["hide"] : styles["show"]}`}
            />
             <div
                className={`${styles["sprinkle"]} ${styles["circle"]} ${styles["seventh"]} ${
                    styles["sm"]
                } ${mode === MODE.DARK ? styles["hide"] : styles["show"]}`}
            />
            {/* ============== SHADOW ============= */}
            <div className={`${styles["inset-shadow"]}`} />

            {/* ============== BG ============= */}
            <div
                className={`${styles["bg"]} ${
                    mode === MODE.DARK ? styles["light-1"] : styles["dark-1"]
                }`}
            />
            <div
                className={`${styles["bg"]} ${
                    mode === MODE.DARK ? styles["light-2"] : styles["dark-2"]
                }`}
            />
            <div
                className={`${styles["bg"]} ${
                    mode === MODE.DARK ? styles["light-3"] : styles["dark-3"]
                }`}
            />
            <div
                className={`${styles["bg"]} ${
                    mode === MODE.DARK ? styles["light-4"] : styles["dark-4"]
                }`}
            />
        </button>
    );
};
