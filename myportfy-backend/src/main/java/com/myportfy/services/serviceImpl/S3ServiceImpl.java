package com.myportfy.services.serviceImpl;

import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.DeleteObjectRequest;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.myportfy.services.IS3Service;
import com.myportfy.services.exceptions.FileException;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import java.io.InputStream;
import java.net.URI;
import java.net.URISyntaxException;

@Service
@Slf4j
public class S3ServiceImpl implements IS3Service {

    private final String FILE_EXCEPTION_MESSAGE = "Erro ao converter URL para URI";

    @Autowired
    private AmazonS3 amazonS3;
    @Value("${s3.bucket}")
    private String bucketName;

    @Override
    public URI uploadFile(InputStream is, String fileName, String contentType) {
        try {
            ObjectMetadata meta = new ObjectMetadata();
            meta.setContentType(contentType);
            log.info("Upload started for file: {}", fileName);
            amazonS3.putObject(bucketName, fileName, is, meta);
            log.info("Upload completed for object: {}", fileName);
            return amazonS3.getUrl(bucketName, fileName).toURI();
        } catch (URISyntaxException e) {
            throw new FileException(FILE_EXCEPTION_MESSAGE);
        }
    }

    @Override
    @Async
    public synchronized void deletePicture(String key) {
        log.info("Deleting image: {}", key);
        DeleteObjectRequest request = new DeleteObjectRequest(bucketName, key);
        amazonS3.deleteObject(request);
    }
}
