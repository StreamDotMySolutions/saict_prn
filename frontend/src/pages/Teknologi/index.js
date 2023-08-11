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
                            Sistem memaparkan maklumat data PRUDUN15 ini menggunakan teknologi Open Source. Seksyen Aplikasi ICT (SAICT) mendapat
                            mandat dari SEKSYEN EHWAL SEMASA (SES) untuk menyediakan satu laman web yang mesra paparan MOBILE dan juga DESKTOP bagi memaparkan maklumat pilihanraya secara REALTIME dari bilik gerakan.
                        </Card.Text>

                        <Card.Text>
                            Latensi data telah diuji agar tidak melebihi 5 saat dari bilik gerakan ke portal. Pelapor RTM di bilik gerakan akan melaporkan menggunakan 
                            teknologi GOOGLE CLOUD iaitu :
                            <ul>
                                <li>GOOGLE SHEET</li>
                                <li>GOOGLE DRIVE</li>
                            </ul>
                            Kemudian data akan dihantar menggunakan GOOGLE SCRIPT ke Pangkalan Data Utama di RTM sebelum di paparkan ke PORTAL rasmi di https://pilihanraya.rtm.gov.my.
                            <br />
                            <br />
                            Sebelum data dikeluarkan ke PORTAL, ianya perlu melalui beberapa fasa pengesahan dari VERIFIER untuk memastikan data adalah tepat
                            dengan merujuk pangkalan Suruhanjaya Pilhanraya (SPR).
                        
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
                            SAICT menggunakan pendekatan Rapid  Software Development Life Cycle (SDLC) untuk mempercepatkan pembangunan portal.
                        </Card.Text>

                        <Card.Text>
                            <h2>Keselamatan</h2>
                            SAICT menggunakan security ranking dari Mozilla Observatory untuk menilai tahap keselamatan laman web ini
                            dan telah memperolehi gred <strong>B+</strong>.
                            <br />
                            Rujuk pautan berikut: <a target="_blank" href="https://observatory.mozilla.org/analyze/pilihanraya.rtm.gov.my">
                            <strong>https://observatory.mozilla.org/analyze/pilihanraya.rtm.gov.my</strong>
                            </a>
                        </Card.Text>

                        <Card.Text>
                            <h2>Server</h2>
                            Menggunakan perkhidmatan Server Pusat Data Sentral Awam (PDSA MAMPU)
                        </Card.Text>

                    </Card.Body>
                </Card>
       
            </Container>
    
        </>
    )
}

export default Teknologi