import React from "react";
import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from 'react-bootstrap/Card';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Teknologi = () => {
    return (
        <>
            <Container>
                <Breadcrumb>
                    <Breadcrumb.Item linkAs={Link} linkProps={{ to: "/" }}>
                        <FontAwesomeIcon icon="fas fa-home" />
                    </Breadcrumb.Item>

                    <Breadcrumb.Item active>
                        Teknologi
                    </Breadcrumb.Item>
                </Breadcrumb>
                <Card>
                    <Card.Header>
                    <h2>
                        Teknologi
                    </h2>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text>
                            Sistem paparkan maklumat data PRN NEGERI ke 15 ini menggunakan teknologi Open Source. Pihak SAICT ( Seksyen Aplikasi ICT ) mendapat
                            mandat dari UNIT BERITA RTM untuk menyediakan satu laman web yang mesra MOBILE dan juga DESKTOP untuk memaparkan maklumat pilihanraya
                            yang bersumberkan dari wartawan RTM secara REALTIME dari bilik gerakan.
                        </Card.Text>

                        <Card.Text>
                            Latency data telah diuji untuk tidak melebihi 5 saat dari bilik gerakan ke portal. Di bilik gerakan, wartawan RTM akan melaporkan menggunakan 
                            teknologi GOOGLE CLOUD iaitu :
                            <ul>
                                <li>GOOGLE SHEET</li>
                                <li>GOOGLE DRIVE</li>
                            </ul>
                            Kemudian data akan dihantar menggunakan GOOGLE SCRIPT ke DATABASE utama di RTM sebelum di paparkan ke PORTAL rasmi di https://pilihanraya.rtm.gov.my.
                            <br />
                            <br />
                            Sebelum data dikeluarkan ke PORTAL, ianya perlu melalui beberapa fasa pengesahan dari VERIFIER untuk memastikan data adalah tepat
                            mengikut piawai UNIT BERITA RTM.
                        
                        </Card.Text>

                        <h2>Perisian</h2>
                        <Card.Text>
                            Sistem laman web ini dibina menggunakan teknologi OPEN SOURCE seperti berikut :
                            <ol>
                                <li>Frontend menggunakan teknologi SpA ( Single Page Action ) dari ReactJS</li>
                                <li>API Backend menggunakan teknologi RESTful dari perisian framework LARAVEL</li>
                                <li>API server yang dikuasai oleh NGINX dan PHP Swoole untuk pastikan kelajuan tinggi dan kemampuan menahan load concurrent yang tinggi</li>
                                <li>Process Manager dari PM2 untuk melihat metrik penggunaan resource server secara realtime</li>
                                <li>Sistem Smart CACHE untuk pastikan DATABASE tidak overload sewaktu traffic tinggi</li>
                                <li>Database MySQL Enterprise dari ORACLE</li>
                                <li>Web server prestasi tinggi dari NGINX yang telah ditala untuk keselamatan dan trafik yang tinggi</li>
                                <li>Paparan yang mudah dan kemas menggunakan Bootstrap 5 CSS Framework</li>
                                <li>Sistem pengurusan source code dari GIT</li>
                                <li>Sistem operasi dari UBUNTU</li>
                                <li>Sistem automasi dari CRON</li>
                                <li>Sistem automasi dari BASH Script</li>
                            </ol>
                        </Card.Text>

                        <Card.Text>
                        <h2>Bahasa</h2>
                            Bahasa aturcara yang digunakan adalah seperti berikut :
                            <ol>
                                <li>JAVASCRIPT di frontend</li>
                                <li>HTML di frontend</li>
                                <li>CSS di frontend</li>
                                <li>PHP di backend</li>
                                <li>Protokol REST untuk API</li>
                                <li>Google App Script di backend</li>
                            </ol>
                        </Card.Text>

                        <Card.Text>
                            <h2>Proses</h2>
                            Proses dari mula sehingga akhir, pihak SAICT menggunakan pendekatan Rapid SDLC untuk mempercepatkan
                            penyiapan portal
                        </Card.Text>

                        <Card.Text>
                            <h2>Keselamatan</h2>
                            Kami menggunakan security ranking dari Mozilla Observatory untuk menilai tahap keselamatan laman web ini
                            dan dapat memperolehi markah <strong>B+</strong>.
                            <br />
                            Boleh rujuk di sini <a target="_blank" href="https://observatory.mozilla.org/analyze/pilihanraya.rtm.gov.my">
                            <strong>https://observatory.mozilla.org/analyze/pilihanraya.rtm.gov.my</strong>
                            </a>
                        </Card.Text>

                        <Card.Text>
                            <h2>Server</h2>
                            Server dibekalkan oleh pihak MAMPU ( PDSA )
                        </Card.Text>

                    </Card.Body>
                </Card>
       
            </Container>
    
        </>
    )
}

export default Teknologi