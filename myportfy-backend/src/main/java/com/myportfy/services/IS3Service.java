package com.myportfy.services;

import org.springframework.web.multipart.MultipartFile;

import java.io.InputStream;
import java.net.URI;

public interface IS3Service {
    URI uploadFile(MultipartFile multipartFile);
    URI uploadFile(InputStream is, String fileName, String contentType);
}
