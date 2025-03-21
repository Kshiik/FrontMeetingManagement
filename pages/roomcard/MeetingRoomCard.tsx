import {
    Typography, 
    Button, 
    ThemeProvider,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableRow,
    Paper,
    IconButton
} from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React, { useRef, useState } from "react";
import '../../styles/global.css';
// import '../../styles/MeetingRoomCardStyles.css';
import theme from '../../styles/theme';
import { motion } from "framer-motion";

const room = {
    name: "Комната 132",
    office: "Екатеринбург",
    status: "Активна",
    description: "Но базовые сценарии поведения пользователей набирают популярность среди определенных слоев населения, а значит, должны быть подвергнуты целой серии независимых исследований. Каждый из нас понимает очевидную вещь: высокотехнологичная концепция общественного уклада.",
    access: "Приватная",
    employees: [
        "Иванов Иван Иванович",
        "Иванов Иван Иванович",
        "Иванов Иван Иванович",
    ],
    size: '8',
    photoPath: [
        "/images/room_photo.png",
        "/images/peregovorka-1.jpg",
        "/images/stol-peregovorov-selecta-supbig-05.jpg",
    ],
    calandarCode: 'events-32812048',
};

const MeetingRooms = () => {
    const rows = [
        { label: "Название", value: room.name },
        { label: "Офис", value: room.office },
        { label: "Статус", value: room.status },
        { label: "Описание", value: room.description },
        { label: "Доступность", value: room.access },
        { label: "Сотрудники", value: room.employees },
        { label: "Емкость", value: room.size },
      ];
    
    const [selectedImage, setSelectedImage] = useState(room.photoPath[0]);

    const handleImageClick = (photoPath: string) => {
        setSelectedImage(photoPath);
    };


    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchMove, setTouchMove] = useState<number | null>(null);
    const [offset, setOffset] = useState(0);
    const sliderRef = useRef<HTMLDivElement>(null);

    const getSliderWidth = () => {
        return sliderRef.current?.offsetWidth || 0;
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => (prev > 0 ? prev - 1 : room.photoPath.length - 1));
        setOffset(0);
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev < room.photoPath.length - 1 ? prev + 1 : 0));
        setOffset(0); 
    };

    const handleTouchStart = (e: React.TouchEvent) => {
        setTouchStart(e.touches[0].clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (touchStart !== null) {
        const currentX = e.touches[0].clientX;
        const delta = touchStart - currentX;
        setTouchMove(currentX);
        setOffset(-delta);
        }
    };

    const handleTouchEnd = () => {
        if (touchStart !== null && touchMove !== null) {
        const deltaX = touchStart - touchMove;
        const sliderWidth = getSliderWidth();
        if (deltaX > sliderWidth * 0.3) {
            handleNext();
        } else if (deltaX < -sliderWidth * 0.3) {
            handlePrev();
        }
        }
        setTouchStart(null);
        setTouchMove(null);
        setOffset(0);
    };

    const translateX = -currentIndex * getSliderWidth() + offset;

    return(
        <div style={{ padding: '60px'}}> 
            <ThemeProvider theme={theme}>
                <div className="content">
                    <div className="title-container">
                        <Typography variant='h5'>Переговорная комната - {room.name}</Typography>
                        <Button color="secondary" sx={{backgroundColor: '#eee'}}>
                            К списку комнат
                        </Button>
                    </div>
                    <div className="meeting-room__info-box">
                        <div className="image-slider-box">
                            <div className="image-slider" ref={sliderRef}>
                                <div className="image-slider-items"
                                    style={{ transform: `translateX(${translateX}px)` }}
                                    onTouchStart={handleTouchStart}
                                    onTouchMove={handleTouchMove}
                                    onTouchEnd={handleTouchEnd}
                                    >
                                    {room.photoPath.map((imageSrc, index) => (
                                        <img key={index} src={imageSrc} alt={`Thumbnail ${index + 1}`} />
                                    ))}
                                </div>
                            </div>
                            <div className="image-slider-actions">
                                    <div className="image-slider-counter">
                                        <Typography>{currentIndex + 1}</Typography>
                                        <Typography>из</Typography>
                                        <Typography>{room.photoPath.length}</Typography>
                                    </div>
                                    <div className="image-slider-buttons">
                                        <IconButton
                                            color="secondary"
                                            sx={{ backgroundColor: "#eee" }}
                                            onClick={handlePrev}>
                                            <ArrowBackIosNewIcon />
                                        </IconButton>
                                        <IconButton
                                            color="secondary"
                                            sx={{ backgroundColor: "#eee" }}
                                            onClick={handleNext}>
                                            <ArrowForwardIosIcon />
                                        </IconButton>
                                    </div>
                                </div>
                        </div>
                        <div className="image-selector">
                            <div className="image-selector__image-list">
                                {room.photoPath.map((imageSrc, index) => (
                                    <div key={index}
                                        className={`image-selector__image-item ${
                                        selectedImage === imageSrc ? "image-selector__image-item--active" : ""}`}onClick={() => handleImageClick(imageSrc)}>
                                        <img src={imageSrc} alt={`Thumbnail ${index + 1}`} />
                                    </div>
                                ))}
                            </div>
                            <div className="image-selector__selected-image">
                                <motion.img
                                    key={selectedImage}
                                    src={selectedImage}
                                    alt="Selected image"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </div>
                        </div>
                        <div className="info-table">
                            <TableContainer component={Paper} sx={{ width: '100%'}}>
                                <Table>
                                    <TableBody>
                                    {rows.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row" sx={{ fontWeight: "bold", width: "128px", backgroundColor: '#E3E3E3', padding: "0 10px"}}>
                                                <div className="table-head">
                                                    <Typography className="table-head-text">{row.label}</Typography>
                                                </div>
                                            </TableCell>
                                            <TableCell sx={{ width: "calc(100% - 128px)", padding: "10px"}}>
                                                {renderValue(row.value)}
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Button color={"primary"} variant={"contained"} className="book-button">
                                <img src="/images/lock.svg"/>
                                Забронировать
                            </Button>
                        </div>
                    </div>
                    <div className="title-container" style={{marginTop: '48px'}}>
                        <Typography variant='h5'>Календарь занятости</Typography>
                    </div>
                    <iframe className="calandar-frame" src="https://calendar.yandex.ru/embed/week?&layer_ids=32812048&tz_id=Asia/Yekaterinburg&layer_names=Комната 213"/>
                </div>
            </ThemeProvider>
        </div>
    );
}

const renderValue = (value: string | string[]) => {
    if (Array.isArray(value)) {
      return (
        <div className="table-text-list">
            {value.map((item) => (
                <div className="table-text-list-item">
                    <Typography className="table-text-value">{item}</Typography>
                </div>
            ))}
        </div>
      );
    }
    return <Typography className="table-text-value">{value}</Typography>;
  };

export default MeetingRooms;
